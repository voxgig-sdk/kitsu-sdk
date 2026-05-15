package core

type KitsuError struct {
	IsKitsuError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewKitsuError(code string, msg string, ctx *Context) *KitsuError {
	return &KitsuError{
		IsKitsuError: true,
		Sdk:              "Kitsu",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *KitsuError) Error() string {
	return e.Msg
}
