import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { getAppSettings, updateDownloadLink } from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  app: router({
    getDownloadLink: publicProcedure.query(async () => {
      const settings = await getAppSettings();
      return {
        downloadLink: settings?.downloadLink || "https://example.com/download",
      };
    }),

    verifyPassword: publicProcedure
      .input(z.object({ password: z.string() }))
      .mutation(({ input }) => {
        const isValid = input.password === "abca2250";
        return { isValid };
      }),

    updateDownloadLink: publicProcedure
      .input(
        z.object({
          downloadLink: z.string().url(),
          password: z.string(),
        })
      )
      .mutation(async ({ input }) => {
        if (input.password !== "abca2250") {
          throw new Error("كلمة المرور غير صحيحة");
        }
        await updateDownloadLink(input.downloadLink);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
