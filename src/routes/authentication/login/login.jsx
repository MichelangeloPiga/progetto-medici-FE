import { Form } from "react-router-dom";

export default function Login() {
    return (
        <>
            <div id="accesso">
                            <Form>
                                <label>
                                    Email:
                                    <input type="text" name="email" />
                                </label>
                                <label>
                                    Password:
                                    <input type="text" name="password" />
                                </label>
                                <input type="submit" value="Accedi" />
                            </Form>
                        </div>
        </>
    )
}