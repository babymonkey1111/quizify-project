import ChangePasswordForm from "@/components/forms/ChangePasswordForm";
import UpdateProfileForm from "@/components/forms/UpdateProfileForm";
import { getServerAuthSession } from "@/lib/next-auth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const Page = async (props: Props) => {
  const session = await getServerAuthSession();

  return (
    <div className="flex flex-col md:flex-row gap-x-28 gap-y-8 mt-10 ">
      <div>
        <h2 className="text-xl sm:text-3xl font-bold tracking-tighter mb-4 relative inline-block ">
          Settings
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1412 136"
            fill="#000"
            preserveAspectRatio="none"
            height="8px"
            width="100%"
          >
            <path d="M2.9 51.31c1.54 1.59 3.55 2.42 5.67 2.93 9.55 2.69 12.36 4.04 30.44 7.8-3 .3-5.73.44-8.57 3.08a9.83 9.83 0 0 0-2.07 10.92c.83 2.7 3.33 4.22 5.31 6.05 10.97 9.24 37.74 12.54 57.74 16.6 28.32 5.7 56.66 11.52 85.37 14.86 23.26 11.61 80.27 14.32 103.75 15.4 34.52 2.19 69.08 3.36 103.65 3.76 121.04 6.36 242.43.51 363.58.82 271.97-15.76 111.74-7.14 354.24-27.85 46.28-2.18 92.54-4.84 138.71-8.85 12.39-1.12 31.77-2.4 34.68-3.76 3.32-1.16 5.52-4.34 6.02-7.77 123.48-7.79 121.13-7.18 123.45-8.4 4.59-1.61 7.1-7.14 5.79-11.8a10.12 10.12 0 0 0-9.64-7.34c-46.89.01-33.59-2.78-103.06 3.46l10.94-1.87c1.99-.76 4.08-1.67 5.19-3.58 4.19-4.72 2.14-13.98-5.64-15.77-3.38-2.63-6.42-2-14.13-2.11-4.56-.7-9.13-1.34-13.72-1.81 34.64-5.34 46.49-8.03 55.99-12.31 2.43-1.11 4.63-2.64 6.94-3.97 14.45-7.01 3.34-24.98-8.18-18.36-2.71 1.43-5.2 3.25-7.94 4.62-11.02 4.17-22.83 5.68-34.36 7.85-36.51 6.23-65.21 9.47-105.27 13.24-39.97 3.44-79.94 7.17-120.01 9.1-112.89 6.65-225.89 10.72-338.92 13.94-139.42 4.28-72.29 2.74-238.74 3.83-152.12.02-105.22.84-209.3-3.14-24.84-.9-33.26-1.91-65.79-4.63-17.2-1.82-43.29-7.05-66.97-9.27-4.21-.16-8.68-1.39-12.64.37a9.33 9.33 0 0 0-5.97 7.81l-.03.26c-68.56-8.07-86.97-8.7-119.44-11.18a7.6 7.6 0 0 0-3.85.86 9.31 9.31 0 0 0-5.97 7.81c-.59 3.07.64 6.15 2.75 8.4Z" />
          </svg>
        </h2>
      </div>
      <div className="flex-1">
        <UpdateProfileForm
          defaultValues={{
            first_name: session!.user.first_name,
            last_name: session!.user.last_name,
          }}
        />
        <ChangePasswordForm />
      </div>
    </div>
  );
};

export default Page;
