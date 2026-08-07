"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { contactFormSchema, ContactFormValues } from "@/lib/validations";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function ContactForm() {
  const [isPending, setIsPending] = React.useState(false);
  const { t } = useLanguage();
  const [status, setStatus] = React.useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsPending(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Bir hata oluştu.");
      }

      setStatus({
        type: "success",
        message: t("form.success"),
      });
      form.reset();
    } catch (error: any) {
      setStatus({
        type: "error",
        message: error.message || "Mesaj gönderilirken bir hata oluştu.",
      });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {status.type && (
          <div
            className={cn(
              "p-4 rounded-lg text-sm font-semibold border",
              status.type === "success"
                ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200 border-emerald-200/50"
                : "bg-destructive/10 text-destructive border-destructive/20"
            )}
          >
            {status.message}
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Full Name */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.name")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("form.name")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.email")}</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Subject */}
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.subject")}</FormLabel>
              <FormControl>
                <Input placeholder={t("form.subject")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("form.message")}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("form.message")}
                  className="min-h-32 resize-y"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isPending}
          className="w-full sm:w-auto font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t("form.sending")}
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              {t("form.submit")}
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
