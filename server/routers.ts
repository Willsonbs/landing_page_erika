import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { sendContactEmail } from "./email";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
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

  contact: router({
    sendMessage: publicProcedure
      .input(
        z.object({
          name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
          email: z.string().email("Email invalido"),
          phone: z.string().min(10, "Telefone invalido"),
          message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const success = await sendContactEmail(input);
          if (!success) {
            throw new Error("Falha ao enviar email");
          }
          return {
            success: true,
            message: "Mensagem enviada com sucesso!",
          };
        } catch (error) {
          console.error("Erro ao processar formulario de contato:", error);
          throw new Error(
            "Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato via WhatsApp."
          );
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
