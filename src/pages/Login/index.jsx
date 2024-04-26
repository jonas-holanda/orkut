import Footer from "../../components/Footer";
import CardLeft from "../../components/CardLeft";
import CardRight from "../../components/CardRight";
import Input from "../../components/Input";
import './index.css';
import './index-responsive.css';

export default function Login () {
    return (
        <>
        <section className="container__login">
            <div className="login__card">
                <CardLeft/>
                <CardRight title="com seu e-mail" login="true">
                        <Input type="email" information="Digite seu e-mail"></Input>
                        <Input type="password" information="Digite sua senha"></Input>
                </CardRight>
            </div>
            <Footer/>
        </section>
        </>
    );
}