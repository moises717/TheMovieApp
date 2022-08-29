interface Props {
    children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
    return (
        <div className="grid place-items-center">
            <div className="w-layout m-auto mt-5 max-w-layout flex items-center justify-center">
                {children}
            </div>
        </div >
    )
}
