FROM golang:1.15

COPY . .

RUN go build server.go

EXPOSE 8080

ENTRYPOINT ["./server"]