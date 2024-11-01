import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Button, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Opts = ({ onValueChange }) => {
    return (
        <View>
            <RNPickerSelect
                onValueChange={onValueChange}
                items={[
                    { label: "Bee", value: "Bee" },
                    { label: "Crocodile", value: "Crocodile" },
                    { label: "Deer", value: "Deer" },
                    { label: "Elephant", value: "Elephant" },
                    { label: "Giraffe", value: "Giraffe" },
                    { label: "Hummingbird", value: "Hummingbird" },
                    { label: "Kingfisher", value: "Kingfisher" },
                    { label: "Leopard", value: "Leopard" },
                    { label: "Owl", value: "Owl" },
                    { label: "Peacock", value: "Peacock" },
                    { label: "Penguin", value: "Penguin" },
                    { label: "Rabbit", value: "Rabbit" }
                ]}
            />
        </View>
    );
};

const TextBox = ({ image, onAnswerSelect }) => {
    return (
        <View>
            <Text>What Animal is this?</Text>
            <Opts onValueChange={onAnswerSelect} />
            <Image source={image} style={{ width: 450, height: 450 }} />
        </View>
    );
};

const App = () => {
    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');
    const [q3, setQ3] = useState('');

    // Define correct answers in a state variable
    const [correctAnswers] = useState({
        q1: 'Deer',
        q2: 'Kingfisher',
        q3: 'Penguin',
    });

    const handleSubmit = () => {
        let score = 0;
        if (q1 === correctAnswers.q1) score++;
        if (q2 === correctAnswers.q2) score++;
        if (q3 === correctAnswers.q3) score++;

        Alert.alert(`You got ${score} out of 3 correct!`);
    };

    return (
        <View>
            <ScrollView>
                <Text></Text>
                <Text></Text>
                <TextBox image={require('./img/deer.jpg')} onAnswerSelect={(value) => setQ1(value)} />
                <TextBox image={require('./img/kingfisher.jpg')} onAnswerSelect={(value) => setQ2(value)} />
                <TextBox image={require('./img/penguin.jpg')} onAnswerSelect={(value) => setQ3(value)} />
                <Button title="Submit Answers" color="green" onPress={handleSubmit} />
            </ScrollView>
        </View>
    );
};

export default App;
