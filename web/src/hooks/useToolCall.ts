import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

type CallToolResponse<ToolStructuredContent extends Record<string, unknown>> = {
  isError: boolean;
  meta: Record<string, unknown>;
  content: { type: "text"; text: string }[];
  structuredContent?: ToolStructuredContent;
  result: string;
};

export const useCallTool = <
  ToolInput extends Record<string, unknown> = Record<string, unknown>,
  ToolStructuredContent extends Record<string, unknown> = Record<string, unknown>,
>(
  name: string,
  options: Omit<
    UseMutationOptions<CallToolResponse<ToolStructuredContent>, Error, ToolInput>,
    "mutationKey" | "mutationFn"
  >,
) => {
  const { mutate, mutateAsync, ...rest } = useMutation({
    ...options,
    mutationKey: ["callTool", name],
    mutationFn: (args: ToolInput) =>
      window.openai?.callTool(name, args) as Promise<CallToolResponse<ToolStructuredContent>>,
  });

  return {
    callToolAsync: mutateAsync,
    callTool: mutate,
    ...rest,
  };
};
