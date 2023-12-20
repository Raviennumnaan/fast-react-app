import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, curQuantity }) {
  const dispatch = useDispatch();

  function handleIncrease() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  function handleDecrease() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <div className='flex items-center gap-2 md:gap-3'>
      <Button onClick={handleDecrease} type='round'>
        -
      </Button>
      <span className='text-sm font-medium'>{curQuantity}</span>
      <Button onClick={handleIncrease} type='round'>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
