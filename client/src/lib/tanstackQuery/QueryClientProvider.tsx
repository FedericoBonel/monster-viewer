import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
    QueryClient,
    QueryClientProvider as TanQueryClientProvider,
} from "@tanstack/react-query";

interface QueryClientProviderProps {
    children: React.ReactNode;
}

const queryClient = new QueryClient();

/**
 * Enables and provides the react query client that handles server state mirroring in the client.
 *
 * Should be provided at the root level.
 */
const QueryClientProvider = ({ children }: QueryClientProviderProps) => {
    return (
        <TanQueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools />
        </TanQueryClientProvider>
    );
};

export default QueryClientProvider;
