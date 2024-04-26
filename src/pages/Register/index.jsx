import Footer from "../../components/Footer";
import CardLeft from "../../components/CardLeft";
import CardRight from "../../components/CardRight";
import Input from "../../components/Input";
import './index.css';
import './index-responsive.css';

export default function Register () {
    return (
        <>
        <section className="container__register">
            <div className="register__card">
                <CardLeft/>
                <CardRight title="com seu usuário do Github">
                        <Input type="email" information="Digite seu email"></Input>
                        <Input type="password" information="Digite sua senha"></Input>
                        <Input type="password" information="Repita sua senha"></Input>
                        <Input type="text" information="Apelido"></Input>
                </CardRight>
            </div>
            <Footer/>
        </section>
        </>
    );
}