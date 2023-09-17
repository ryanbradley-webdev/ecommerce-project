import { Flex, Input, Select, Checkbox } from '@mantine/core'
import { STATES } from '../../util/states'

export default function AddressForm({
    refs,
    toggleBilling,
    type,
    onChange
}: {
    refs: AddressRefs
    toggleBilling?: (isSame: boolean) => void
    type: 'shipping' | 'billing'
    onChange?: (value: string, type: keyof Address) => void
}) {
    const generateChange = (type: keyof Address) => {
        if (onChange) {
            return (e: React.ChangeEvent<HTMLInputElement>) => {
                onChange(e.target.value, type)
            }
        }

        return undefined
    }

    return (
        <>
            {(type === 'billing' && toggleBilling) && (
                <Checkbox
                    label='Same as shipping address'
                    onChange={e => toggleBilling(e.target.checked)}
                />
            )}

            <Flex
                gap={24}
            >

                <Input.Wrapper
                    label='First Name'
                    required
                    style={{
                        flexGrow: '1'
                    }}
                >
                
                    <Input
                        ref={refs.firstName}
                        onChange={generateChange('firstName')}
                    />
                
                </Input.Wrapper>

                <Input.Wrapper
                    label='Last Name'
                    required
                    style={{
                        flexGrow: '1'
                    }}
                >
                
                    <Input
                        ref={refs.lastName}
                        onChange={generateChange('lastName')}
                    />
                
                </Input.Wrapper>

            </Flex>

            <Input.Wrapper
                label='Address Line 1'
                required
            >
            
                <Input
                    ref={refs.addressLineOne}
                    onChange={generateChange('addressLineOne')}
                />
            
            </Input.Wrapper>

            <Input.Wrapper
                label='Address Line 2'
            >
            
                <Input
                    ref={refs.addressLineTwo}
                    placeholder="optional"
                    onChange={generateChange('addressLineTwo')}
                />
            
            </Input.Wrapper>

            <Input.Wrapper
                label='Address Line 3'
            >
            
                <Input
                    ref={refs.addressLineThree}
                    placeholder="optional"
                    onChange={generateChange('addressLineThree')}
                />
            
            </Input.Wrapper>

            <Flex
                gap={16}
                wrap='wrap'
            >

                <Input.Wrapper
                    label='City'
                    required
                    style={{
                        flexGrow: '1'
                    }}
                >
                
                    <Input
                        ref={refs.city}
                        onChange={generateChange('city')}
                    />
                
                </Input.Wrapper>

                <Select
                    ref={refs.state}
                    data={STATES}
                    label='State'
                    onChange={value => {
                        if (onChange && value) {
                            onChange(value, 'state')
                        }
                    }}
                    w={70}
                    required
                />

                <Input.Wrapper
                    label='ZIP'
                    required
                    style={{
                        flexGrow: '1'
                    }}
                >
                
                    <Input
                        ref={refs.zip}
                        type="number"
                        onChange={generateChange('zip')}
                    />
                
                </Input.Wrapper>

            </Flex>
        </>
    )
}