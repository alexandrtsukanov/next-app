export default function LoginForm() {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email</label>
                <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
                <input type="password" className="htmlForm-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
