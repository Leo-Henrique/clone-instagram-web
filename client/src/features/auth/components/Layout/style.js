import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding-top: 3rem;
`;

export { Column } from "./content/Column";
export { default as Error } from "./content/Error";
export { FormBlock } from "./content/FormBlock";
export { default as InfoBlock } from "./content/InfoBlock";
export { default as Input } from "./content/Input";
export { AlternateLink, ReturnLink, SmallLink } from "./content/Links";
export { default as Logo } from "./content/Logo";
export { Separator } from "./content/Separator";
export { Text } from "./content/Text";
export { Title } from "./content/Title";
