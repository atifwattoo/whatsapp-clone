// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

// export const config = {
//   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };


// upper code are not working so we use old Clerk code

import { authMiddleware } from "@clerk/nextjs/server";

// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware
export default authMiddleware({
	// Allow signed out users to access the specified routes:
	// publicRoutes: ["/"],
});

export const config = {
	matcher: [
		// Exclude files with a "." followed by an extension, which are typically static files.
		// Exclude files in the _next directory, which are Next.js internals.
		"/((?!.+\\.[\\w]+$|_next).*)",
		// Re-include any files in the api or trpc folders that might have an extension
		"/(api|trpc)(.*)",
	],
};