import { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ song: 
    `Suburbia where the suburbs met utopia where the suburbs met utopia
    Lost in the high street, where the dogs run
    Roaming suburban boys
    Mother's got her hair do to be done
    She says they're too old for toys
    Stood by the bus stop with a felt pen
    In this suburban hell
    And in the distance a police car
    To break the suburban spell
    Let's take a ride
    And run with the dogs tonight in suburbia
    You can't hide/run with the dogs tonight
    In suburbia
    Break the window by the town hall
    Listen! a siren screams
    There in the distance like a roll call
    Of all the suburban dreams
    Let's take a ride
    And run with the dogs tonight
    In suburbia
    You can't hide
    Run with the dogs tonight
    In suburbia
    I only wanted something else to do but hang around
    I only wanted something else to do but hang around
    It's on the front page of the papers
    This is their hour of need
    Where's a policeman when you need one
    To blame the colour tv?
    Let's take a ride
    And run with the dogs tonight
    In suburbia
    You can't hide
    Run with the dogs tonight
    In suburbia
    Suburbia
    where the suburbs met utopia
    What kind of dream was this
    so easy to destroy?
    And who are we to blame
    for the sins of the past?
    These slums of the future?
    suburbia
    where the suburbs met utopia
    suburbia
    where the suburbs met utopia` })
}