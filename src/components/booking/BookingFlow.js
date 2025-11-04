"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { bookingData } from "@/content/booking-data";
import { cn } from "@/lib/utils";

const steps = [
  { id: 0, title: "Escolha o servico", subtitle: "Selecione o ritual ideal" },
  { id: 1, title: "Data e horario", subtitle: "Reserve na agenda CCosta" },
  { id: 2, title: "Dados e pagamento", subtitle: "Confirme sua experiencia" },
  { id: 3, title: "Ticket gerado", subtitle: "Tudo certo! Ate breve." },
];

export function BookingFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [serviceId, setServiceId] = useState("");
  const [dayId, setDayId] = useState("");
  const [slot, setSlot] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    notes: "",
  });

  const selectedService = useMemo(
    () => bookingData.services.find((service) => service.id === serviceId) ?? null,
    [serviceId]
  );

  const selectedDay = useMemo(
    () => bookingData.calendar.days.find((day) => day.id === dayId) ?? null,
    [dayId]
  );

  const selectedPayment = useMemo(
    () => bookingData.paymentMethods.find((payment) => payment.id === paymentId) ?? null,
    [paymentId]
  );

  const canProceed = useMemo(() => {
    if (currentStep === 0) return Boolean(selectedService);
    if (currentStep === 1) return Boolean(selectedService && selectedDay && slot);
    if (currentStep === 2) {
      const hasContact =
        customer.name.trim().length > 1 && customer.email.includes("@");
      return Boolean(selectedService && selectedDay && slot && selectedPayment && hasContact);
    }
    return true;
  }, [currentStep, selectedService, selectedDay, slot, selectedPayment, customer]);

  function handleAdvance() {
    if (!canProceed) return;
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  }

  function handleGoBack() {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }

  return (
    <div className="space-y-10">
      <StepIndicator currentStep={currentStep} />

      <div className="rounded-4xl border border-white/10 bg-white p-6 shadow-[0_40px_120px_-80px_rgba(20,20,20,0.35)] backdrop-blur md:p-10 dark:bg-zinc-950">
        {currentStep === 0 && (
          <StepServiceSelection selectedService={serviceId} onSelect={setServiceId} />
        )}

        {currentStep === 1 && (
          <StepScheduleSelection
            selectedService={selectedService}
            selectedDay={selectedDay}
            selectedSlot={slot}
            onSelectDay={setDayId}
            onSelectSlot={setSlot}
          />
        )}

        {currentStep === 2 && (
          <StepCheckout
            selectedService={selectedService}
            selectedDay={selectedDay}
            selectedSlot={slot}
            selectedPayment={paymentId}
            onSelectPayment={setPaymentId}
            customer={customer}
            onChangeCustomer={setCustomer}
          />
        )}

        {currentStep === 3 && (
          <StepConfirmation
            service={selectedService}
            day={selectedDay}
            slot={slot}
            payment={selectedPayment}
            customer={customer}
          />
        )}

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200 pt-6 dark:border-white/10">
          <button
            type="button"
            onClick={handleGoBack}
            disabled={currentStep === 0}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-500 hover:text-zinc-900 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/20 dark:text-white dark:hover:border-white/40"
          >
            Voltar
          </button>

          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={handleAdvance}
              disabled={!canProceed}
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-rose-500 dark:hover:bg-rose-400"
            >
              Avancar
            </button>
          ) : (
            <div className="flex flex-wrap gap-3">
              <Link
                href="/produtos"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-rose-600 shadow hover:-translate-y-0.5 hover:bg-rose-50 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              >
                Ver produtos recomendados
              </Link>
              <Link
                href="/agradecimento"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900 dark:border-white/20 dark:text-white"
              >
                Ir para agradecimento
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StepIndicator({ currentStep }) {
  return (
    <div className="grid gap-3 rounded-4xl border border-white/10 bg-white/80 p-6 shadow-[0_40px_120px_-80px_rgba(20,20,20,0.3)] backdrop-blur md:grid-cols-4 dark:bg-white/10">
      {steps.map((step, index) => {
        const isActive = currentStep === index;
        const isCompleted = currentStep > index;
        return (
          <div
            key={step.id}
            className={cn(
              "rounded-3xl px-4 py-3 transition",
              isActive
                ? "bg-zinc-900 text-white shadow-lg dark:bg-rose-500"
                : isCompleted
                ? "bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-200"
                : "bg-white text-zinc-600 dark:bg-black/20 dark:text-zinc-300"
            )}
          >
            <p className="text-xs uppercase tracking-[0.3em]">{`0${index + 1}`}</p>
            <h3 className="mt-1 text-base font-semibold">{step.title}</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-300">{step.subtitle}</p>
          </div>
        );
      })}
    </div>
  );
}

function StepServiceSelection({ selectedService, onSelect }) {
  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
          Escolha o ritual de beleza
        </h2>
        <p className="max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
          Cada servico foi desenhado pela Cinthia para entregar resultado impecavel e conforto total.
          Selecione o que melhor traduz seu objetivo agora.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {bookingData.services.map((service) => {
          const isActive = selectedService === service.id;
          return (
            <button
              key={service.id}
              type="button"
              onClick={() => onSelect(service.id)}
              className={cn(
                "flex h-full flex-col items-start gap-4 rounded-3xl border px-6 py-6 text-left transition",
                isActive
                  ? "border-rose-400 bg-rose-50 shadow-lg dark:border-rose-300/50 dark:bg-rose-500/10"
                  : "border-zinc-200 bg-white hover:border-rose-200 dark:border-white/10 dark:bg-white/[0.03]"
              )}
            >
              <div className="flex w-full items-center justify-between">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  {service.name}
                </h3>
                <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-600 dark:bg-rose-500/20 dark:text-rose-200">
                  {service.duration} min
                </span>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">{service.description}</p>
              <div className="flex w-full items-center justify-between text-sm text-zinc-500 dark:text-zinc-300">
                <span>R$ {service.price.toFixed(2)}</span>
                <span>{service.maintenance}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepScheduleSelection({
  selectedService,
  selectedDay,
  selectedSlot,
  onSelectDay,
  onSelectSlot,
}) {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
          Escolha a melhor data
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Agenda atualizada para os proximos dias. Se precisar de outro horario, fale com a nossa equipe.
        </p>
      </header>

      {selectedService ? (
        <div className="flex flex-wrap gap-3">
          {bookingData.calendar.days.map((day) => {
            const isActive = selectedDay?.id === day.id;
            return (
              <button
                key={day.id}
                type="button"
                onClick={() => {
                  onSelectDay(day.id);
                  onSelectSlot("");
                }}
                className={cn(
                  "rounded-full border px-5 py-3 text-sm font-medium transition",
                  isActive
                    ? "border-rose-400 bg-rose-100 text-rose-600 dark:border-rose-400/60 dark:bg-rose-500/20 dark:text-rose-200"
                    : "border-zinc-200 bg-white text-zinc-600 hover:border-rose-200 hover:text-rose-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-300"
                )}
              >
                {day.label}
              </button>
            );
          })}
        </div>
      ) : (
        <p className="rounded-3xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-300/30 dark:bg-amber-500/10 dark:text-amber-200">
          Selecione um servico antes de escolher o horario.
        </p>
      )}

      {selectedDay && (
        <div className="space-y-3">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-300">
            Horarios disponiveis
          </p>
          <div className="flex flex-wrap gap-3">
            {bookingData.calendar.slots.map((time) => {
              const isActive = selectedSlot === time;
              return (
                <button
                  key={time}
                  type="button"
                  onClick={() => onSelectSlot(time)}
                  className={cn(
                    "rounded-full border px-5 py-3 text-sm font-semibold transition",
                    isActive
                      ? "border-rose-400 bg-rose-500 text-white shadow dark:border-rose-300 dark:bg-rose-400"
                      : "border-zinc-200 bg-white text-zinc-700 hover:border-rose-200 hover:text-rose-500 dark:border-white/10 dark:bg-white/[0.07] dark:text-zinc-200"
                  )}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {selectedDay && selectedSlot && selectedService && (
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 px-6 py-4 text-sm text-emerald-700 shadow-sm dark:border-emerald-400/30 dark:bg-emerald-500/10 dark:text-emerald-200">
          <strong>Bloqueio temporario:</strong> mantemos o horario reservado por 10 minutos enquanto voce confirma o pagamento.
        </div>
      )}
    </div>
  );
}

function StepCheckout({
  selectedService,
  selectedDay,
  selectedSlot,
  selectedPayment,
  onSelectPayment,
  customer,
  onChangeCustomer,
}) {
  return (
    <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
      <div className="space-y-6">
        <header className="space-y-2">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Preencha seus dados
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            Usamos suas informacoes apenas para confirmar o agendamento e enviar lembretes.
          </p>
        </header>

        <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              Nome completo
            </label>
            <input
              type="text"
              value={customer.name}
              onChange={(event) =>
                onChangeCustomer((prev) => ({ ...prev, name: event.target.value }))
              }
              placeholder="Como devemos te chamar?"
              className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 outline-none transition focus:border-rose-300 focus:ring-2 focus:ring-rose-100 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:focus:border-rose-400/60 dark:focus:ring-rose-500/20"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              Email
            </label>
            <input
              type="email"
              value={customer.email}
              onChange={(event) =>
                onChangeCustomer((prev) => ({ ...prev, email: event.target.value }))
              }
              placeholder="Para enviarmos o ticket digital"
              className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 outline-none transition focus:border-rose-300 focus:ring-2 focus:ring-rose-100 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:focus:border-rose-400/60 dark:focus:ring-rose-500/20"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              Observacoes (opcional)
            </label>
            <textarea
              value={customer.notes}
              onChange={(event) =>
                onChangeCustomer((prev) => ({ ...prev, notes: event.target.value }))
              }
              rows={3}
              placeholder="Alergias, preferencias ou qualquer detalhe importante."
              className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 outline-none transition focus:border-rose-300 focus:ring-2 focus:ring-rose-100 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:focus:border-rose-400/60 dark:focus:ring-rose-500/20"
            />
          </div>
        </form>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-300">
            Metodo de pagamento
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {bookingData.paymentMethods.map((method) => {
              const isActive = selectedPayment === method.id;
              return (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => onSelectPayment(method.id)}
                  className={cn(
                    "h-full rounded-3xl border px-5 py-6 text-left transition",
                    isActive
                      ? "border-rose-400 bg-rose-50 shadow-lg dark:border-rose-300/60 dark:bg-rose-500/20"
                      : "border-zinc-200 bg-white hover:border-rose-200 dark:border-white/10 dark:bg-white/[0.05]"
                  )}
                >
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                    {method.label}
                  </p>
                  <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-300">
                    {method.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <aside className="space-y-5 rounded-3xl border border-rose-200 bg-rose-50 px-6 py-7 text-sm text-zinc-700 shadow-lg dark:border-rose-500/40 dark:bg-rose-500/10 dark:text-rose-50">
        <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-200">Resumo</h3>
        <div className="space-y-3">
          <SummaryRow label="Servico" value={selectedService?.name ?? "Selecione um servico"} />
          <SummaryRow
            label="Duracao"
            value={selectedService ? `${selectedService.duration} min` : "--"}
          />
          <SummaryRow label="Data" value={selectedDay ? selectedDay.full : "--"} />
          <SummaryRow label="Horario" value={selectedSlot || "--"} />
          <SummaryRow label="Pagamento" value={selectedPayment || "Escolha um metodo"} />
        </div>
        <div className="rounded-2xl border border-white/40 bg-white/60 px-4 py-3 text-sm text-rose-600 dark:border-white/10 dark:bg-white/5 dark:text-rose-100">
          Total:{" "}
          <strong className="text-lg">
            {selectedService ? `R$ ${selectedService.price.toFixed(2)}` : "R$ 0,00"}
          </strong>
        </div>
        <p className="text-xs text-rose-500 dark:text-rose-200/80">
          Pagamentos online sao processados em ambiente seguro. Enviaremos comprovante e contato do
          studio em ate 5 minutos apos concluir.
        </p>
      </aside>
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-rose-500 dark:text-rose-200/80">
        {label}
      </span>
      <span className="text-sm font-semibold">{value}</span>
    </div>
  );
}

function StepConfirmation({ service, day, slot, payment, customer }) {
  return (
    <div className="space-y-8">
      <header className="space-y-2 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-rose-500">
          Ticket digital gerado
        </p>
        <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">
          Nos vemos em breve, {customer.name || "cliente"}!
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Enviamos um e-mail com todos os detalhes e um link para reagendar se precisar.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-zinc-200 bg-white px-6 py-6 shadow-[0_25px_80px_-60px_rgba(20,20,20,0.3)] dark:border-white/10 dark:bg-white/[0.06]">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Resumo do agendamento
          </h3>
          <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
            <li>
              <strong className="block text-xs uppercase tracking-[0.3em] text-zinc-500">
                Servico
              </strong>
              {service?.name ?? "--"}
            </li>
            <li>
              <strong className="block text-xs uppercase tracking-[0.3em] text-zinc-500">
                Data e horario
              </strong>
              {day?.full ?? "--"} as {slot || "--"}
            </li>
            <li>
              <strong className="block text-xs uppercase tracking-[0.3em] text-zinc-500">
                Pagamento
              </strong>
              {payment?.label ?? "Sera finalizado na loja"}
            </li>
            <li>
              <strong className="block text-xs uppercase tracking-[0.3em] text-zinc-500">
                Valor total
              </strong>
              {service ? `R$ ${service.price.toFixed(2)}` : "--"}
            </li>
          </ul>
        </div>
        <div className="space-y-4 rounded-3xl border border-rose-200 bg-rose-50 px-6 py-6 shadow-[0_25px_80px_-60px_rgba(190,24,93,0.35)] dark:border-rose-500/40 dark:bg-rose-500/15">
          <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-200">
            Detalhes do studio
          </h3>
          <p className="text-sm text-rose-600/80 dark:text-rose-100/80">
            Rua Harmonia, 123 - Capivari de Baixo | Santa Catarina <br />
            Estacionamento conveniado: Rua Flores, 45 (3h gratuitas).
          </p>
          <div className="rounded-2xl border border-white/40 bg-white/70 px-4 py-3 text-sm text-rose-600 dark:border-white/10 dark:bg-white/10 dark:text-rose-100">
            Chegue com 5 minutos de antecedencia para aproveitar o nosso Welcome Lash Bar com
            espumante rosado.
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://wa.me/5548991921003"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 dark:bg-rose-500 dark:hover:bg-rose-400"
            >
              falar no whatsapp
            </Link>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full border border-rose-200 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-rose-600 transition hover:border-rose-300 hover:text-rose-700 dark:border-rose-500/40 dark:text-rose-200"
            >
              salvar ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
