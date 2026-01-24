'use client'

import { useEffect, useState } from 'react'
import {
    Input,
    Select,
    DatePicker,
    Radio,
    Button,
    Row,
    Col,
    Table,
    Space,
    Checkbox,
    TablePaginationConfig,
} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../store/store'
import {
    setFormData,
    submitForm,
    resetForm,
    editRow,
    deleteRow,
    deleteAll,
    initFromStorage,
} from '../store/registerSlice'
import TopBar from '../components/TopBar'
import type { ColumnsType } from 'antd/es/table'
import type { FormData, DataListItem } from '../types/register.interface'


const { Option } = Select

export default function RegisterForm() {
    const dispatch = useDispatch<AppDispatch>()
    const { formData, dataList } = useSelector(
        (state: RootState) => state.register
    )

    const [page, setPage] = useState(1)
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

    useEffect(() => {
        dispatch(initFromStorage())
    }, [])

    const handleChange = <K extends keyof FormData>(
        key: K,
        value: FormData[K]
    ) => {
        dispatch(setFormData({ key, value }))
    }

    const columns: ColumnsType<DataListItem> = [
        {
            title: 'Name',
            render: (_, record) => (
                <>{record.firstname} {record.lastname}</>
            ),
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
        },
        {
            title: 'Mobile Phone',
            render: (_, r) => `${r.mobileCode}${r.mobile}`,
        },
        {
            title: 'Nationality',
            dataIndex: 'nationality',
        },
        {
            title: 'MANAGE',
            render: (_, record, index) => (
                <Space>
                    <Button type="link" onClick={() => dispatch(editRow(record))}>
                        EDIT
                    </Button>
                    <Button
                        type="link"
                        danger
                        onClick={() => dispatch(deleteRow(index))}
                    >
                        DELETE
                    </Button>
                </Space>
            ),
        },
    ]

    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(90deg, #7ED56F 0%, #F9C74F 100%)',
            }}
        >
            <TopBar title='Form & Table' />
            {/* ===== FORM CARD ===== */}
            <div
                style={{
                    maxWidth: 1100,
                    margin: '0 auto',
                    padding: 32,
                    borderRadius: 12,
                    border: '2px solid #666',
                    background: 'transparent',
                }}
            >
                {/* Row 1 */}
                <Row gutter={16}>
                    <Col span={4}>
                        <label>Title</label>
                        <Select
                            value={formData.title}
                            onChange={(v) => handleChange('title', v)}
                            style={{ width: '100%' }}
                            placeholder="Title"
                        >
                            <Option value="mr">Mr.</Option>
                            <Option value="ms">Ms.</Option>
                            <Option value="mrs">Mrs.</Option>
                        </Select>
                    </Col>

                    <Col span={10}>
                        <label>Firstname</label>
                        <Input
                            value={formData.firstname}
                            onChange={(e) => handleChange('firstname', e.target.value)}
                        />
                    </Col>

                    <Col span={10}>
                        <label>Lastname</label>
                        <Input
                            value={formData.lastname}
                            onChange={(e) => handleChange('lastname', e.target.value)}
                        />
                    </Col>
                </Row>

                {/* Row 2 */}
                <Row gutter={16} style={{ marginTop: 16 }}>
                    <Col span={6}>
                        <label>Birthday</label>
                        <DatePicker
                            style={{ width: '100%' }}
                            value={formData.birthday}
                            onChange={(d) => handleChange('birthday', d)}
                        />
                    </Col>

                    <Col span={10}>
                        <label>Nationality</label>
                        <Select
                            value={formData.nationality}
                            onChange={(v) => handleChange('nationality', v)}
                            style={{ width: '100%' }}
                            placeholder="Please Select"
                        >
                            <Option value="thai">Thai</Option>
                            <Option value="other">Other</Option>
                        </Select>
                    </Col>
                </Row>

                {/* Citizen ID */}
                <div style={{ marginTop: 16 }}>
                    <label>Citizen ID</label>
                    <Space>
                        {[50, 80, 100, 70, 50].map((w, i) => (
                            <Input
                                key={i}
                                style={{ width: w }}
                                maxLength={[1, 4, 5, 2, 1][i]}
                                value={formData.citizenId[i]}
                                onChange={(e) => {
                                    const v = [...formData.citizenId]
                                    v[i] = e.target.value.replace(/\D/g, '')
                                    handleChange('citizenId', v)
                                }}
                            />
                        ))}
                    </Space>
                </div>

                {/* Gender */}
                <div style={{ marginTop: 16 }}>
                    <label>Gender</label>
                    <Radio.Group
                        value={formData.gender}
                        onChange={(e) => handleChange('gender', e.target.value)}
                    >
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Female</Radio>
                        <Radio value="unisex">Unisex</Radio>
                    </Radio.Group>
                </div>

                {/* Mobile */}
                <Row gutter={16} style={{ marginTop: 16 }}>
                    <Col span={6}>
                        <label>Mobile Phone</label>
                        <Select
                            value={formData.mobileCode}
                            onChange={(v) => handleChange('mobileCode', v)}
                            style={{ width: '100%' }}
                        >
                            <Option value="+66">+66</Option>
                            <Option value="+1">+1</Option>
                        </Select>
                    </Col>

                    <Col span={10}>
                        <label>&nbsp;</label>
                        <Input
                            value={formData.mobile}
                            onChange={(e) =>
                                handleChange('mobile', e.target.value.replace(/\D/g, ''))
                            }
                        />
                    </Col>
                </Row>

                {/* Passport */}
                <div style={{ marginTop: 16 }}>
                    <label>Passport No</label>
                    <Input
                        value={formData.passport}
                        onChange={(e) => handleChange('passport', e.target.value)}
                    />
                </div>

                {/* Salary */}
                <div style={{ marginTop: 16 }}>
                    <label>Expected Salary</label>
                    <Input
                        value={formData.salary}
                        onChange={(e) => handleChange('salary', e.target.value)}
                    />
                </div>

                {/* Buttons */}
                <Row justify="end" gutter={16} style={{ marginTop: 24 }}>
                    <Col>
                        <Button onClick={() => dispatch(resetForm())}>RESET</Button>
                    </Col>
                    <Col>
                        <Button type="primary" onClick={() => dispatch(submitForm())}>
                            SUBMIT
                        </Button>
                    </Col>
                </Row>
            </div>

            {/* ===== TABLE ===== */}
            <div style={{ maxWidth: 1100, margin: '40px auto 0' }}>
                <Space style={{ marginBottom: 16 }}>
                    <Checkbox
                        checked={selectedRowKeys.length === dataList.length && dataList.length > 0}
                        onChange={(e) =>
                            setSelectedRowKeys(
                                e.target.checked ? dataList.map((_, i) => i) : []
                            )
                        }
                    >
                        Select All
                    </Checkbox>

                    <Button
                        danger
                        disabled={!selectedRowKeys.length}
                        onClick={() => dispatch(deleteAll())}
                    >
                        DELETE
                    </Button>
                </Space>

                <Table
                    rowSelection={{
                        selectedRowKeys,
                        onChange: setSelectedRowKeys,
                    }}
                    columns={columns}
                    dataSource={dataList}
                    rowKey={(_, index) => index as number}
                    pagination={{
                        current: page,
                        pageSize: 5,
                        total: dataList.length,
                    }}
                    onChange={(p: TablePaginationConfig) =>
                        setPage(p.current || 1)
                    }
                />
            </div>
        </div>
    )
}
