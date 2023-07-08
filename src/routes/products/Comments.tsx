import { Container, Input, Rating, Stack, Text } from "@mantine/core";
import styles from './products.module.css'
import { useQuery } from "@tanstack/react-query";
import { PLACEHOLDER_REVIEWS } from "../../../placeholderData";
import { Review } from "../../../types";

export default function Comments({
    id
}: {
    id: string
}) {
    const reviews = useQuery({
        queryKey: [`reviews-${id}`],
        queryFn: () => PLACEHOLDER_REVIEWS.filter(review => review.productId === id)
    }).data

    return (
        <Stack
            className={styles.comments}
            mt={48}
            w='100%'
            maw={500}
        >
            
            <Input.Wrapper
                px={16}
                label='Let others know what you think of these shoes.'
            >
            
                <Input />

            </Input.Wrapper>

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