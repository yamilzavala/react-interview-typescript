type LooseAutocomplete<T extends string> = T | Omit<string, T>;
type IconSize = LooseAutocomplete<'sm'|'lg'>;
interface IconProps {
    size: IconSize;
}

export const Icon = (props: IconProps) => (<></>)

const Autocomplete = () => {
    return (
        <>
            <Icon size="small" />
            <Icon size="lg" />
            <Icon size="something-else" />
        </>
    );
};

export default Autocomplete;