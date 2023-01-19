import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'
import { ProgressBar } from './ProgressBar'

interface habitDayProps {
    completed: number
    amount: number
}

export function HabitDay({ completed, amount }: habitDayProps) {
    const completedPocentage =  Math.round((completed/amount) * 100)
    return (
        <Popover.Root>
            <Popover.Trigger className={clsx('w-10 h-10 border-2 rounded-lg', {
                'bg-zinc-900 border-zinc-800' : completedPocentage === 0,
                'bg-violet-900 border-violet-700' : completedPocentage >= 0 && completedPocentage < 20,
                'bg-violet-800 border-violet-600' : completedPocentage >= 20 && completedPocentage < 40,
                'bg-violet-700 border-violet-500' : completedPocentage >= 40 && completedPocentage < 60,
                'bg-violet-600 border-violet-500' : completedPocentage >= 60 && completedPocentage < 80,
                'bg-violet-500 border-violet-400' : completedPocentage >= 80,
            })} />

            <Popover.Portal>
                <Popover.Content 
                    className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'
                >
                    <div className=''>
                        <span className='font-semibold text-zinc-400'>terça-feira</span>
                        <br />
                        <span className='mt-1 font-extrabold leading-tight text-3xl'>17/01</span>

                        <ProgressBar progress={completedPocentage} />

                        <Popover.Arrow height={8} width={16} className='fill-zinc-900' />
                    </div>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}