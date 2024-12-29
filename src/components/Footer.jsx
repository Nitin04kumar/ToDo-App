import style from './Footer.module.css';

export default function Footer({countCompleted , totaltask}){
    console.log(countCompleted)
    return(<div className={style.footer}>
        <span className={style.item}>
            Completed Task : {countCompleted}  
        </span>
        <span className={style.item}>
        Total Task :{totaltask}
        </span>
        
    </div>);
}