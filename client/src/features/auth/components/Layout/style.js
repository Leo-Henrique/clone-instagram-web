import { styled } from "styled-components";

import Column from "./content/Column";
import FormBlock from "./content/FormBlock";
import InfoBlock from "./content/InfoBlock";
import Logo from "./content/Logo";
import Input from "./content/Input";
import Separator from "./content/Separator";
import SmallLink from "./content/SmallLink";
import AlternateLink from "./content/AlternateLink";
import ReturnLink from "./content/ReturnLink";
import Title from "./content/Title";
import Text from "./content/Text";
import Error from "./content/Error";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding-top: 3rem;
`;

Layout.Column = Column;
Layout.FormBlock = FormBlock;
Layout.InfoBlock = InfoBlock;
Layout.Logo = Logo;
Layout.Input = Input;
Layout.Separator = Separator;
Layout.SmallLink = SmallLink;
Layout.AlternateLink = AlternateLink;
Layout.ReturnLink = ReturnLink;
Layout.Title = Title;
Layout.Text = Text;
Layout.Error = Error;

export default Layout;
