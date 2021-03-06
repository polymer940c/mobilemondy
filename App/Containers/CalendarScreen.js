import React from 'react'
import { ListView, Text, Image, View } from 'react-native'
import styles from './Styles/LoginScreenStyles'
import Calendar from '../Components/Calendar'
import DeviceInfo from 'react-native-device-info'

export default class CalendarScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.navigation.state.params.username,
            date: new Date()
        };
    }

    handleNextButtonPress() {
        const date = new Date(this.state.date);
        date.setMonth(date.getMonth() + 1);
        this.setState({
            date
        });
    }

    handlePrevButtonPress() {
        const date = new Date(this.state.date);
        date.setMonth(date.getMonth() - 1);
        this.setState({
            date
        });
    }

    handleDateSelect(date) {
        this.props.navigation.navigate('DayScreen', {selectedDate: date, username: this.state.username})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Please select the day you are free</Text>

                <Calendar
                    date={this.state.date}
                    onPrevButtonPress={() => this.handlePrevButtonPress()}
                    onNextButtonPress={() => this.handleNextButtonPress()}
                    onDateSelect={(date) => this.handleDateSelect(date)}
                />
            </View>
        );
    }
}