import React, {useState} from 'react'
import * as S from './home.styles'
import { useDispatch, useSelector } from 'react-redux'
import { getTodosByUser, selectTodosState } from '../../store/ducks/todos.duck'
import Input from '../../components/atm-input-field/atm.input-field.component';
import Button from '../../components/mol-button/mol-button.component';
import Spinner from '../../components/org-spinner/org-spinner.component';
import Card from '../../components/org-card/org-card.component';
import { formatISOToDateString } from '../../utils/date';

const Home: React.FC = () => {
    const {todos, loading, error} = useSelector(selectTodosState);
    const dispatch = useDispatch();
    const [userId, setUserId] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(e.target.value)
    }

    const handleSearch = () => {
        dispatch(getTodosByUser(Number(userId)));
    }

    return (
        <>
            <S.Header>
                <Input name="userId" label="ID do usuario:" type="number" value={userId} onChange={handleInputChange}/>
                <Button label="Pesquisar" onClick={handleSearch} />
            </S.Header>
            {loading && (
                <Spinner />
            )}
            
            {!loading && todos.length 
                ? (
                    <S.Content>
                        {todos.map(todo => (
                            <Card key={todo.id}>
                                <S.Title style={{color: '#fff'}}>{todo.title}</S.Title>
                                <S.Paragraph><span>Vencimento: </span> {formatISOToDateString(todo.due_on)}</S.Paragraph>
                                <S.Paragraph><span>Status: </span> {todo.status}</S.Paragraph>
                            </Card>
                        ))}
                    </S.Content>
                )
                : !loading && <S.Paragraph>Nenhum item encontrado</S.Paragraph>
            }
        </>
    )
}

export default Home;