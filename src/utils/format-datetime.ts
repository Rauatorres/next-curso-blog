import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDateTime(rawDate: string) {
  const formattedDate = format(new Date(rawDate), "dd/MM/yyyy 'às' H'h'mm", {
    locale: ptBR,
  });

  return formattedDate;
}

export function formatRelativeDate(rawDate: string) {
  const formattedDate = formatDistanceToNow(new Date(rawDate), {
    locale: ptBR,
    addSuffix: false,
  });

  return formattedDate;
}

// const date = new Date().toISOString();
// const date = "2026-03-12T14:21:53.929Z";
// console.log(formatDateTime(date));
// console.log(formatRelativeDate(date));
