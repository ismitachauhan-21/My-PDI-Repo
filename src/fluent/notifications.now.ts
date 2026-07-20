import { EmailNotification } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'

// Notification 1: Notify the creator that their safety incident report was received
EmailNotification({
    $id: Now.ID['safety-report-creator-notification'],
    table: 'incident',
    name: 'Safety Report Received - Creator',
    description: 'Notifies the creator when a safety incident is reported through the safety application',
    active: true,
    triggerConditions: {
        generationType: 'engine',
        onRecordInsert: true,
    },
    recipientDetails: {
        sendToCreator: true,
    },
    emailContent: {
        subject: `Safety Incident \${number} - Report Received`,
        messageHtml: `<p>Hello \${sys_created_by},</p>
<p>Thank you for reporting a safety issue. Your incident has been successfully logged.</p>
<p><strong>Incident Number:</strong> \${number}</p>
<p><strong>Short Description:</strong> \${short_description}</p>
<p><strong>Priority:</strong> \${priority}</p>
<p>Our team will review and address this as soon as possible. You will be notified of any updates.</p>
<p>Stay safe!</p>`,
    },
})

// Notification 2: Notify the assignee about the priority and what they need to resolve
EmailNotification({
    $id: Now.ID['safety-report-assignee-notification'],
    table: 'incident',
    name: 'Safety Report Assignment - Assignee Priority',
    description: 'Notifies the assignee of a safety incident about the priority to resolve the issue',
    active: true,
    triggerConditions: {
        generationType: 'engine',
        onRecordInsert: true,
        onRecordUpdate: true,
        condition: 'assigned_toISNOTEMPTY^EQ',
    },
    recipientDetails: {
        recipientFields: ['assigned_to'],
        sendToCreator: false,
    },
    emailContent: {
        subject: `Safety Incident \${number} - Priority: \${priority}`,
        messageHtml: `<p>Hello \${assigned_to.name},</p>
<p>You have been assigned a safety incident that requires your attention.</p>
<p><strong>Incident Number:</strong> \${number}</p>
<p><strong>Priority:</strong> \${priority}</p>
<p><strong>Short Description:</strong> \${short_description}</p>
<p><strong>Description:</strong> \${description}</p>
<p>Please address this issue according to its priority level. Safety incidents are critical and require prompt resolution.</p>`,
    },
})
