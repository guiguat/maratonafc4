package main

import (
	"fmt"
	"net/http"
)

func hello(w http.ResponseWriter, r* http.Request){
	fmt.Fprintf(
		w,
		"Eu sou Full Cycle.",
	)
}

func main(){
	http.HandleFunc("/", hello)
	http.ListenAndServe(":8080", nil)
}
