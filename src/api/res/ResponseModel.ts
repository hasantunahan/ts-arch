class ResponseModel<T> {
    data?: T;
    support?: Support
}


class Support {
    url?: String;
    text?: String;
}

export default ResponseModel