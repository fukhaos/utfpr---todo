import { Text, StyleSheet } from 'react-native'
import { theme } from '@/components/styles';

interface ITitle {
    name: string,
    upperCase?: boolean;
}

const Title = ({ name, upperCase }: ITitle) => {
    let value = name;
    if (upperCase) {
        value = name.toUpperCase()
    }

    return (
        <Text style={styles.title}>{value}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.tint
    }
})

export default Title;