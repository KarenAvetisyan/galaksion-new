import { request } from '@lib/request';
import { AxiosMethod } from 'types/axios';
import { FeedbackEndpoints } from './config';

export interface FeedbackData {
    name: string;
    email: string;
    text: string;
}

export class FeedbackService {
    public static async sendFeedback(data: FeedbackData): Promise<void> {
        return request({
            url: FeedbackEndpoints.sendFeedback(),
            method: AxiosMethod.POST,
            data,
        });
    }
}
