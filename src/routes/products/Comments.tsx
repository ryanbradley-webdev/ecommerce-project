import { Button, Container, Input, Loader, Rating, Stack, Text, Textarea, Title } from "@mantine/core";
import styles from './products.module.css'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getReviewsById } from "../../../lib/getReviewsbyId";
import { addReview } from "../../../lib/addReview";
import { Review, ReviewSubmission } from "../../../types";
import { useRef, useState } from "react";

export default function Comments({
    id,
    updateRating
}: {
    id: string,
    updateRating: (rating: number | null | undefined) => void
}) {
    const [userName, setUserName] = useState('')
    const [userReview, setUserReview] = useState('')
    const [userRating, setUserRating] = useState(0)

    const formRef = useRef<HTMLFormElement>(null)

    const queryClient = useQueryClient()

    const { data: reviews } = useQuery({
        queryKey: [`reviews-${id}`],
        queryFn: () => getReviewsById(id)
    })

    const mutation = useMutation({
        mutationKey: [`add-review-${id}`],
        mutationFn: (newReview: ReviewSubmission) => {
            return addReview(newReview, reviews?.length)
        },
        onSuccess: (data) => {
            if (typeof data === 'number') updateRating(data)
            queryClient.invalidateQueries({ queryKey: [`reviews-${id}`] })
        }
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!userReview || !userRating || !userName) return

        const newReview: ReviewSubmission = {
            productId: id,
            review: userReview,
            rating: userRating,
            name: userName
        }

        mutation.mutateAsync(newReview)
            .then(() => {
                setUserName('')
                setUserReview('')
                setUserRating(0)
            })
    }

    const btnMsg = () => {
        if (mutation.isLoading) {
            return <Loader variant="dots" color="white" />
        }

        if (mutation.isError) {
            return 'Something went wrong'
        }

        return 'Add Review'
    }

    return (
        <Stack
            className={styles.comments}
            mt={48}
            w='100%'
            maw={500}
        >

            <form
                action=""
                onSubmit={handleSubmit}
                ref={formRef}
                style={{
                    marginTop: '48px'
                }}
            >

                <Title
                    size={20}
                    align="center"
                    mb={16}
                >
                    Share your thoughts!
                </Title>
            
                <Input.Wrapper
                    px={16}
                    label='Your Name'
                    required
                >
                
                    <Input
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        placeholder="e.g. John D."
                        required
                    />

                </Input.Wrapper>

                <Textarea
                    value={userReview}
                    onChange={e => setUserReview(e.target.value)}
                    placeholder="Add your review here!"
                    required
                    label='Your Review'
                    px={16}
                    autosize
                    minRows={5}
                ></Textarea>

                <Input.Wrapper
                    w='fit-content'
                    mx='auto'
                    my={24}
                    label='Rate this product!'
                    display='flex'
                    style={{
                        alignItems: 'center',
                        gap: '16px'
                    }}
                    required
                >
                
                    <Rating
                        size="lg"
                        value={userRating}
                        onChange={setUserRating}
                    />
                
                </Input.Wrapper>

                <Button
                    w='calc(100% - 32px)'
                    mx={16}
                    mt={12}
                    type="submit"
                >
                    {btnMsg()}
                </Button>

            </form>

            {reviews?.length ? (
                reviews.map(review => (
                    <Comment
                        key={review.id}
                        review={review}
                    />
                ))
            ) : (
                <Text
                    align="center"
                >
                    Be the first to review!
                </Text>
            )}

        </Stack>
    )
}

function Comment({
    review
}: {
    review: Review
}) {
    return (
        <Container
            p={0}
            pb={16}
            mx={16}
            style={{
                borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
            }}
        >

            <Text>
                {review.name}
            </Text>

            <Rating
                fractions={10}
                value={review.rating}
                readOnly
            />

            <Text
                size={14}
                italic
                c={"gray"}
            >
                {new Date(review.created_at).toLocaleDateString()}
            </Text>

            <Text>
                {review.review}
            </Text>
        </Container>
    )
}