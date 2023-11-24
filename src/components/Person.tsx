type personName = {
    name: {
        first: string,
        last: string,
    }

}
export const Person = (props: personName) => {
    return (
        <div>
            {props.name.last} {props.name.first}
        </div>
    )
}