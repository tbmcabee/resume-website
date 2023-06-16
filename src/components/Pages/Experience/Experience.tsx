import React from 'react'
import NavTab from '../../NavTab'
import PageBlock from '../../PageBlock/PageBlock'
import styles from './Experience.module.css'

const Experience = () => {
  return (
    <>
    <div>
        <h1 className="text-center">My Resume Website</h1>
        <NavTab />
    </div>
    <div className={styles.alignDiv}>
        <h5 className={styles.center}>Experience Timeline</h5>
        <PageBlock header='Job Example #1'>
        Experiences I had in this job!!! Collaborates with TD Synnex Sales Reps, 
        Reseller Reps, End Users and internal IBM Employees on technical solutions featuring: IBM Power 9 and 10 servers, 
        AIX, IBM i and Linux distributions 
        </PageBlock>
        <PageBlock header='Job Example #2'>
        Experiences I had in this job!!! Collaborates with TD Synnex Sales Reps, 
        Reseller Reps, End Users and internal IBM Employees on technical solutions featuring: IBM Power 9 and 10 servers, 
        AIX, IBM i and Linux distributions 
        </PageBlock>
        <PageBlock header='Job Example #3'>
        Experiences I had in this job!!! Collaborates with TD Synnex Sales Reps, 
        Reseller Reps, End Users and internal IBM Employees on technical solutions featuring: IBM Power 9 and 10 servers, 
        AIX, IBM i and Linux distributions 
        </PageBlock>
    </div>
    </>
  )
}

export default Experience