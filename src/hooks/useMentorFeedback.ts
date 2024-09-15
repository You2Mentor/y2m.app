import { useUser } from '@auth0/nextjs-auth0/client';

const updateMentorFeedback = async (
  userId: string,
  loggedInUserId: string,
  feedback: string,
  rating: number
) => {
  const response = await fetch(`/api/feedback/${userId}`, {
    method: 'POST',
    headers: {
      'X-User-Id': loggedInUserId,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ feedback, rating }),
  });
  if (!response.ok) throw new Error('Failed to submit feedback');
  return response.json();
};

export const useSubmitMentorFeedback = () => {
  const { user } = useUser();

  const submitMentorFeedback = async (userId: string, feedback: string, rating: number) => {
    if (!user) throw new Error('User not authenticated');
    return updateMentorFeedback(userId, user?.sub ?? '', feedback, rating);
  };

  return { submitMentorFeedback };
};
