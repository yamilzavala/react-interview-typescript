import React, {useState, useRef} from 'react';
import Button from './components/Button';
import ReadOnlyConst from './components/ReadOnlyConst';
import Theme from '../theme/Theme';

const handleClick = (test: string) => {
    return 5;
}

const icon = <i></i>

const AppTs = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            {/* <Button styleProps={{
                bgColor: 'blue',
                fontSize: 30,
                padding: [4,5,6,7]
                }} /> */}

                {/* <Button styleProps={{
                    backgroundColor: 'blue',
                    fontSize: 30
                }} 
                /> */}

                {/* <Button borderRadius={{
                    left: 10,
                    top: 10,
                    right: 10,
                    bottom: 10
                }} /> */}
                
                {/* <Button onClick={handleClick} setCount={setCount}>
                    Some text
                </Button> */}

                {/* <Button onClick={handleClick}>
                    Some text
                </Button> */}


                {/* <Button>
                    {icon}
                </Button> */}
               
                {/* <Button color='blue'/> */}

                {/* <Button variant='primary' type='submit' autoFocus={true} className='test' defaultValue='test'/> */}

                {/* <Button type='submit' color='blue' size='lg' className='test' defaultValue='test'/> */}

                {/* <ReadOnlyConst/> */}

                <Theme/>
        </div>
    );
};

export default AppTs;