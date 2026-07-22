package core

type RepublicmagError struct {
	IsRepublicmagError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewRepublicmagError(code string, msg string, ctx *Context) *RepublicmagError {
	return &RepublicmagError{
		IsRepublicmagError: true,
		Sdk:              "Republicmag",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *RepublicmagError) Error() string {
	return e.Msg
}
