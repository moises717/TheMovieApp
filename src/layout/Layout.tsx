interface Props {
    children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
    return (
        <div className="grid place-items-center" style={{
            background: 'linear-gradient(165.33deg, #00112E 47.34%, #00112E 65.2%, #263C52 101.66%, #607D8B 102.01%)'
        }}>
            <div className="w-layout m-auto mt-5">
                {children}
            </div>
        </div >
    )
}
