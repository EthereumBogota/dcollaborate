
import Container from './Container'

const ScrollDeposit = () => {
    return (
        <Container>
            <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-semibold">Deposit Contribution</h1>
                </div>
                <div className="form-group">
                    <div className="form-field">
                        <label className="form-label">Amount</label>
                        <div className="form-control">
                            <input placeholder="Example: 1000 ETH" className="input max-w-full" />
                        </div>
                    </div>
                    <div className="form-field pt-5">
                        <div className="form-control justify-between">
                            <button type="button" className="btn btn-primary w-full">Deposit</button>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    )    
}

export default ScrollDeposit;
