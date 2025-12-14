import { ChangeEvent, useState } from "react"

export default function SignupForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({...prev, email: event.target.value }))
    }

    const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({...prev, password: event.target.value }))
    }

    const changePasswordConfirm = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({...prev, passwordConfirm: event.target.value }))
    }

    const submit = (event: any) => {
        event.preventDefault();
        console.log('formData =>', formData);
    }

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email address</label>
                <input
                    onChange={changeEmail}
                    type="email"
                    className="htmlForm-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
                <input
                    onChange={changePassword}
                    type="password"
                    className="htmlForm-control"
                    id="exampleInputPassword1"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="htmlForm-label">Confirm password</label>
                <input
                    onChange={changePasswordConfirm}
                    type="password"
                    className="htmlForm-control"
                    id="exampleInputPassword1"
                />
            </div>
            <button onClick={submit} type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
