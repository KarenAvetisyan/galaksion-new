import { useMutation } from "@tanstack/react-query";
import { useUnit } from 'effector-react';
import { FeedbackService, FeedbackData } from '../api/service';
import { FEEDBACK_MUTATION_KEY } from '../api/config';
import { successedFeedbackForm } from '@components/modals/feedback-modal';

export const useFeedbackSubmit = () => {
    const onSuccess = useUnit(successedFeedbackForm);

    const mutation = useMutation({
        mutationKey: [FEEDBACK_MUTATION_KEY],
        mutationFn: (data: FeedbackData) => FeedbackService.sendFeedback(data),
        onSuccess: () => {
            onSuccess();
        },
        onError: (error) => {
            console.error('Error sending feedback:', error);
        },
    });

    const handleSubmit = (data: FeedbackData) => {
        mutation.mutate(data);
    };

    return {
        isLoading: mutation.isPending,
        handleSubmit,
        error: mutation.error,
        isSuccess: mutation.isSuccess,
    };
};
