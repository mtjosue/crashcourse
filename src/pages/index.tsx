// "use client"
// import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Head from "next/head";
// import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "~/utils/api";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { RequiredPropertyComponent } from "~/components/RequiredPropertyComponent";
// import {} from "@heroicons/react"
// import XCircleIcon from "@heroicons/react/20/solid/XCircleIcon";
// import {} from "@heroicons/react"

const postFormSchema = z.object({
  name: z.string(),
  text: z.string().min(1).max(256),
});

type PostFormSchema = z.infer<typeof postFormSchema>;

export default function Home() {
  const [allowed, setAllowed] = useState(true);
  // const user = useUser();

  // const res = api.post.getAllPosts.useQuery(undefined, {
  //   enabled: allowed,
  // });

  // const createPost = api.post.create.useMutation({
  //   onSuccess(post) {
  //     setAllowed(true);
  //     res.refetch().catch(() => console.log("Error in the REFETCH"));
  //     console.log("post in success of CREATE mutation", post);
  //   },
  // });

  // const deletePost = api.post.delete.useMutation({
  //   onSuccess(post) {
  //     setAllowed(true);
  //     res.refetch().catch(() => console.log("Error in the REFETCH"));
  //     console.log("post in success of DELETE mutation", post);
  //   },
  // });

  const {
    // watch,
    setValue,
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormSchema>({
    resolver: zodResolver(postFormSchema),
  });

  console.log("formErrors :", errors);

  const onSubmitPost: SubmitHandler<PostFormSchema> = (data) => {
    console.log("HELLO FROM SUBMIT HANDLER!");
    console.log("DATA :", data);
    resetField("text");
    // createPost.mutate({ ...data });
    // return;
  };

  // useEffect(() => {
  //   if (user.isSignedIn) {
  //     setValue("name", user.user.firstName ?? "No Name Found");
  //   }
  // }, [setValue, user.isSignedIn, user.user?.firstName]);

  // useEffect(() => {
  //   if (res.isSuccess) {
  //     setAllowed(false);
  //   }
  // }, [res.isSuccess]);

  // console.log("data", res);

  const person = {
    name: "Lisbeth",
    age: 28,
  };

  return (
    <>
      <Head>
        <title>Ana First App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Crash <span className="text-[hsl(280,100%,70%)]">Course</span> App
          </h1>
          {/* {user.user && (
            <div className="w-full">
              <form
                className="flex gap-x-3"
                onSubmit={handleSubmit(onSubmitPost)}
              >
                <RequiredPropertyComponent
                  name={person.name}
                  age={person.age}
                />
                <div className="flex w-1/2 flex-col">
                  <label htmlFor="newPost" className="font-bold text-white">
                    New Post
                  </label>
                  <input
                    id="newPost"
                    type="text"
                    className="h-10 rounded-sm bg-gray-200 px-1"
                    placeholder="Write your new post here.."
                    {...register("text")}
                  />
                </div>
                <button type="submit" className="flex items-end">
                  <span className="rounded-sm bg-violet-400 px-5 py-2">
                    Post
                  </span>
                </button>
              </form>
            </div>
          )} */}
          <div className="flex w-full gap-3 md:gap-8">
            {/* {user.isSignedIn ? (
              <div className="flex w-full gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
                <div className="">
                  <h3 className="m-4 rounded-md border-2 border-red-400 p-4 text-2xl font-bold">
                    {user.user.fullName}
                  </h3>
                  <div className="text-lg font-bold">My Posts</div>
                  <SignOutButton />
                </div>
              </div>
            ) : (
              <div className="flex w-full justify-center gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
                <SignInButton />
              </div>
            )} */}
            <div className="flex w-full flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <h3 className="text-2xl font-bold">Feed →</h3>
              <div className="text-lg">
                {/* {res.data?.map((bit, idx) => {
                  return (
                    <p
                      key={`feedPost-${idx}`}
                      className="flex items-end space-x-3"
                    >
                      <XCircleIcon
                        className="h-5 w-5"
                        onClick={() => {
                          deletePost.mutate({
                            id: bit.id,
                            name: bit.name,
                          });
                        }}
                      />
                      <span className="text-bold text-sm">{bit.name}</span>
                      <span>{bit.text}</span>
                    </p>
                  );
                })} */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
