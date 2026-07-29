"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { whatsappLink } from "@/lib/whatsapp";

/**
 * Formulário de contato.
 *
 * Não existe backend nem serviço de e-mail definido no projeto, então em vez de
 * simular um envio que não acontece, o formulário monta a mensagem e abre o
 * WhatsApp com tudo preenchido. É o caminho honesto e o de maior conversão.
 *
 * Quando houver serviço de envio (Resend, CRM ou webhook), basta trocar o
 * corpo de `handleSubmit` — o restante do componente permanece.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const lines = [
      "Olá! Vim pelo site da Fluwend.",
      name && `Meu nome é ${name}.`,
      company && `Empresa: ${company}.`,
      message && `\n${message}`,
    ].filter(Boolean);

    window.open(whatsappLink(lines.join(" ")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2.5">
          <Label htmlFor="contato-nome">Seu nome</Label>
          <Input
            id="contato-nome"
            name="nome"
            autoComplete="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="h-11 bg-surface-elevated/60"
          />
        </div>

        <div className="space-y-2.5">
          <Label htmlFor="contato-empresa">Empresa</Label>
          <Input
            id="contato-empresa"
            name="empresa"
            autoComplete="organization"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className="h-11 bg-surface-elevated/60"
          />
        </div>
      </div>

      <div className="space-y-2.5">
        <Label htmlFor="contato-mensagem">
          O que você quer resolver ou automatizar?
        </Label>
        <Textarea
          id="contato-mensagem"
          name="mensagem"
          rows={4}
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="resize-none bg-surface-elevated/60"
        />
      </div>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
        <Button
          type="submit"
          variant="brand"
          size="xl"
          className="transition-transform duration-500 hover:-translate-y-0.5"
        >
          <MessageCircle aria-hidden="true" />
          Enviar pelo WhatsApp
        </Button>

        <p className="text-sm text-muted-foreground">
          Abre a conversa com tudo já preenchido.
        </p>
      </div>
    </form>
  );
}
