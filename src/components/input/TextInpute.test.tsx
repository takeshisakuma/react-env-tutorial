import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TextInput from './TextInput'

test('TextInput Component test meeodwweeeeeeeewwwwwwwewww', async () => {
    const user = userEvent.setup()
    render(<TextInput />)

    //input要素が存在することを確認
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument()

    //ユーザーがinput要素にHello Worldをタイプして、表示されるのを確認
    await user.type(inputElement, 'Hello World')
    expect(screen.getByText('Hello World'))
})
