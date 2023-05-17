import { styled } from "styled-components";

import Main from "./Main";
import Info from "./Info";
import Logo from "./Logo";
import Input from "./Input";
import Separator from "./Separator";
import SmallLink from "./SmallLink";
import Title from "./Title";
import Text from "./Text";

export const AuthContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding-top: 3rem;
`;

export const Auth = styled.div`
    max-width: 350px;
    width: 100%;
    flex: 1;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

Auth.Main = Main;
Auth.Info = Info;
Auth.Logo = Logo;
Auth.Input = Input;
Auth.Separator = Separator;
Auth.SmallLink = SmallLink;
Auth.Title = Title;
Auth.Text = Text;
