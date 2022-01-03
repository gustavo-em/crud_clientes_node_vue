interface IToken {
    newToken({ email, nome });
    verifyTokenValid();
}



export { IToken }