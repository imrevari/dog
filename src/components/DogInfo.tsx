import { Dog } from "../interfaces/interfaces"


const DogsInfo = ({dog}: {dog: Dog}) => {

    
    const {name, picture, age,weight, sex, owner } = dog

        return(
            <>
                <div className="parent-div">
                    <div className="left-div">
                        <h1>{name}</h1>
                        <p>Sex</p>
                        <p>{sex}</p>
                        <br/>

                        <p>{`Age (years)`}</p>
                        <p>{age}</p>
                        <br/>

                        <p>{`Weight (kg)`}</p>
                        <p>{weight}</p>
                        <br/>

                        <p>Owner</p>
                        <p>{owner ?? `(unknown)`}</p>
                        <br/>


                    </div>
                    <div className="right-div">
                    <img src={picture} width={416}/>
                    </div>
                
                </div>
            </>
        )


}

export default DogsInfo