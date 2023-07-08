import { Button, Container, Input, Rating, Stack, Text } from "@mantine/core";
import styles from './products.module.css'
import { useQuery } from "@tanstack/react-query";
import { getReviewsById } from "../../../lib/getReviewsbyId";
import { Review } from "../../../types";
import { useState } from "react";

export default function Comments({
    id
}: {
    id: string
}) {
    const [userRating, setUserRating] = useState(0)

    const { data: reviews } = useQuery({
        queryKey: [`reviews-${id}`],
        queryFn: () => getReviewsById(id)
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
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
            >
            
                <Input.Wrapper
                    px={16}
                    label='Let others know what you think of these shoes.'
                    required
                >
                
                    <Input
                        required
                    />

                </Input.Wrapper>

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
                >
                    Add Review
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
                {review.date}
            </Text>

            <Text>
                {review.review}
            </Text>
        </Container>
    )
}