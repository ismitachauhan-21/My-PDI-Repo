import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'c94166a5c3114eef9cb208850ae98239'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'e93123659c214da6b9abce740881c3e9'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '0d4bcab0901245619e9da51eb38f46c3'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '3d764ed7500e471286e342731bc1b219'
                    }
                    'safety-report-assignee-notification': {
                        table: 'sysevent_email_action'
                        id: '6d6770d666db4989aa09358ddcaca46b'
                    }
                    'safety-report-creator-notification': {
                        table: 'sysevent_email_action'
                        id: '0cd86223fb0742ba8545c8a887c0be31'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: 'd4f7dd3f581545da88aa52f28e214902'
                    }
                }
            }
        }
    }
}
