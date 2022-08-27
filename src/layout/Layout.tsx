interface Props {
    children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
    return (
        <div className="grid place-items-center">
            <div className="w-layout m-auto mt-5">
                {children}
            </div>
        </div >
    )
}
