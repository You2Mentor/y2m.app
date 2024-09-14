import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User } from '@/types/profile/user';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { profileConfig } from '@/config/application/profile-config';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Image from 'next/image';

interface ProfileViewProps {
  profile: User;
}

const ProfileView: React.FC<ProfileViewProps> = ({ profile }) => {
  return (
    <Card className="mb-5 overflow-hidden">
      <div className="relative h-32 bg-gradient-to-r from-blue-400 to-purple-500">
        {profile.profileBackgroundURL && (
          <Image
            src={profile.profileBackgroundURL}
            alt="Profile Background"
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
      <CardContent className="relative px-6 pb-6 pt-0">
        <div className="flex flex-col items-center sm:flex-row sm:items-end sm:space-x-5">
          <div className="relative -mt-16 flex">
            <Avatar className="size-32 border-4 border-white bg-white">
              <AvatarImage src={profile.profilePictureURL || ''} alt={profile.name || ''} />
              <AvatarFallback className="text-4xl">{profile.name?.[0]}</AvatarFallback>
            </Avatar>
          </div>
          <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
            <p className="text-xl font-bold text-gray-900 dark:text-gray-100">{profile.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{profile.email}</p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="name" className="text-sm font-medium">
              Name
            </Label>
            <Input
              id="name"
              value={profile.name || ''}
              disabled
              className="mt-1 disabled:cursor-auto disabled:opacity-100"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-sm font-medium">
              {profileConfig.profileForm.email.label}
            </Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Input
                    id="email"
                    value={profile.email || ''}
                    disabled
                    className="mt-1 disabled:cursor-auto disabled:opacity-100"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{profileConfig.profileForm.email.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="aboutMe" className="text-sm font-medium">
              About Me
            </Label>
            <Input
              id="aboutMe"
              value={profile.aboutMe || ''}
              disabled
              className="mt-1 disabled:cursor-auto disabled:opacity-100"
            />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="linkedInProfileLink" className="text-sm font-medium">
              LinkedIn Profile
            </Label>
            <Input
              id="linkedInProfileLink"
              value={profile.linkedInProfileLink || ''}
              disabled
              className="mt-1 disabled:cursor-auto disabled:opacity-100"
            />
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Label htmlFor="availability" className="text-sm font-medium">
              {profileConfig.profileForm.availability.label}
            </Label>
            <Textarea
              id="availability"
              value={profile.availability || ''}
              disabled
              className="mt-1 disabled:cursor-auto disabled:opacity-100"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileView;
